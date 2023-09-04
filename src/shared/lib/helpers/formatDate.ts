import dayjs, { Dayjs } from 'dayjs';

const formatDate = (date: string | Dayjs, format: 'DD-MM-YYYY' | 'YYYY-MM-DD'): string => dayjs(date).format(format);

export default formatDate;
