import {
  PhoneArrowUpRightIcon,
  SpeakerWaveIcon,
  PhoneXMarkIcon,
} from '@heroicons/react/24/solid';

export const CALL_STATUS = {
  OutgoingRinging: { label: 'Вызов...', icon: PhoneArrowUpRightIcon },
  OutgoingProgress: { label: 'Вызов...', icon: PhoneArrowUpRightIcon },
  Connected: { label: 'Разговор', icon: SpeakerWaveIcon },
  StreamsRunning: { label: 'Разговор', icon: SpeakerWaveIcon },
  End: { label: 'Завершен', icon: PhoneXMarkIcon },
  Released: { label: 'Завершен', icon: PhoneXMarkIcon },
};
