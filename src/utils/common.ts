import { RepeatType } from '../types';

export const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

export const getRepeatTypeLabel = (type: RepeatType): string => {
  switch (type) {
    case 'daily':
      return '일';
    case 'weekly':
      return '주';
    case 'monthly':
      return '월';
    case 'yearly':
      return '년';
    default:
      return '';
  }
};
