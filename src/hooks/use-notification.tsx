import React from 'react';
import { notification } from 'antd';
import { MessageDescriptor, useIntl } from 'react-intl';
import { ArgsProps } from 'antd/lib/notification';

const duration = 2; // time in seconds

export const useNotification = () => {
    const intl = useIntl();

    return React.useMemo(() => {
        return {
            success: (descriptorId: MessageDescriptor['id'], values?: Record<string, any>, options?: ArgsProps) => {
                return notification.success({
                    message: intl.formatMessage({ id: descriptorId }, values),
                    duration,
                    ...options,
                });
            },
            error: (descriptorId: MessageDescriptor['id'], values?: Record<string, any>, options?: ArgsProps) => {
                return notification.error({
                    message: intl.formatMessage({ id: descriptorId }, values),
                    duration,
                    ...options,
                });
            },
            warning: (descriptorId: MessageDescriptor['id'], values?: Record<string, any>, options?: ArgsProps) => {
                return notification.warning({
                    message: intl.formatMessage({ id: descriptorId }, values),
                    duration,
                    ...options,
                });
            },
            info: (descriptorId: MessageDescriptor['id'], values?: Record<string, any>, options?: ArgsProps) => {
                return notification.info({
                    message: intl.formatMessage({ id: descriptorId }, values),
                    duration,
                    ...options,
                });
            },
        };
    }, [intl]);
};
