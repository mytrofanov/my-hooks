import React from 'react';

interface FetchState<T> {
    data: T;
    metadata: {
        total?: number;
        page?: number;
        totalPages?: number;
        loading: boolean;
    };
}

interface FetchOptions {
    atMount: boolean;
}

interface FetchService<T> {
    (...args: any[]): Promise<{
        data: T;
        metadata: {
            total?: number;
            page?: number;
            totalPages?: number;
        };
    }>;
}

type FetchServiceFn = (...args: any[]) => Promise<void>;

const useFetch = <T, P>(
    service: FetchService<T>,
    initialData: T,
    initialParams: P,
    options: FetchOptions = {} as FetchOptions,
) => {
    const [state, setState] = React.useState<FetchState<T>>({
        data: initialData,
        metadata: {
            loading: false,
        },
    });

    const fetch = React.useCallback<FetchServiceFn>(
        async (...args) => {
            setState(prevState => ({
                ...prevState,
                metadata: {
                    ...prevState.metadata,
                    loading: true,
                },
            }));

            const { data, metadata } = await service(...args);

            setState({
                data,
                metadata: {
                    ...metadata,
                    loading: false,
                },
            });
        },
        [service],
    );

    React.useEffect(() => {
        if (options.atMount) {
            fetch(initialParams);
        }
    }, [fetch, initialParams, options.atMount]);

    return [state, fetch] as [FetchState<T>, FetchServiceFn];
};

export default useFetch;
