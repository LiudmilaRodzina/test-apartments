import { WebViewBridge } from './services/WebViewBridge';

if (import.meta.env.DEV) {
  const contacts = `
    <p>Председатель Носвикаровски Л.Л.  +17139488989</p>
    <p>Адрес: г. Минск, ул. Минская, д. 999, пом. 1099</p>
  `;

  const news = `
    <p>  Внимание! Собрание собственников квартир состоится 26.07.26 в 19 00 в
          клубе жильцов. Просьба всем принять участие. После собрания состоится
          детское мероприятие в 20:00</p>
<img src="https://placehold.co/600x200" />
<img src="https://placehold.co/1600x100" />
    <p>Сердечно приветствуем наших новых жильцов! Тожественно объявляем о
          старте приемки квартир нашего проекта. Просьба связаться с вашим
          менеджером для согласования даты и времени приемки</p>
  `;

  window.Android = {
    sendAction: (payload) => {
      const { action, code } =
        typeof payload === 'string' ? JSON.parse(payload) : payload;

      if (action === 'onUpdateConfig') {
        WebViewBridge.onUpdateConfig({
          mode: 'normal', // normal | open | closed
          str1: 'str1 |',
          str2: 'str2',
          str3: 'str3',
          str4: 'ЖК "',
          str5: 'ЖАСМИНОВАЯ"',
          str6: 'str6',
          str11: 'вход на территорию',
          str13: 'str13',
          str14: 'str14',
          contacts: contacts,
          news: news,
          // backgroundColor: '#793db9',
          backgroundImage: '/bg-image.png',
          // font: 'Caveat',
        });
      }

      if (action === 'onUpdatePrefixes') {
        const prefixes = [
          {
            id: '1',
            name: 'Дом 2А',
            prefix: '2а',
            enabled: true,
            apartments: [
              { number: 1, name: '1' },
              { number: 2, name: '2' },
            ],
          },
          {
            id: '2',
            name: 'Корпус 2',
            prefix: 'prefix2-',
            enabled: true,
          },
          {
            id: '3',
            name: 'Корпус 3',
            prefix: 'prefix3-',
            enabled: true,
          },
          {
            id: '4',
            name: 'Корпус 4',
            prefix: 'prefix4-',
            enabled: true,
          },
          {
            id: '5',
            name: 'Корпус 5',
            prefix: 'prefix5-',
            enabled: true,
          },
          {
            id: '6',
            name: 'Корпус 6',
            prefix: 'prefix6-',
            enabled: true,
          },
          {
            id: '7',
            name: 'Корпус 7',
            prefix: 'prefix7-',
            enabled: true,
          },
          {
            id: '8',
            name: 'Корпус 8',
            prefix: 'prefix8-',
            enabled: true,
          },
        ];

        WebViewBridge.onUpdatePrefixes(prefixes);
      }

      if (action === 'makeCall') {
        WebViewBridge.onCallEvent({ state: 'OutgoingRinging' });
        setTimeout(
          () => WebViewBridge.onCallEvent({ state: 'OutgoingProgress' }),
          1000,
        );
        setTimeout(
          () => WebViewBridge.onCallEvent({ state: 'Connected' }),
          2000,
        );
        setTimeout(
          () => WebViewBridge.onCallEvent({ state: 'StreamsRunning' }),
          4000,
        );
        // setTimeout(() => WebViewBridge.onCallEvent({ state: 'End' }), 6000);
      }

      if (action === 'hangupCall') {
        WebViewBridge.onCallEvent({ state: 'End' });
      }

      if (action === 'openByCode') {
        WebViewBridge.onNotificationEvent(
          code === '1111'
            ? {
                title: 'ПИН код верный',
                msg: 'Открыто, проходите',
                type: 'success',
                timeout: 5000,
              }
            : {
                title: 'Неверный ПИН код',
                msg: 'Попробуйте ещё раз',
                type: 'warning',
                timeout: 5000,
              },
        );
      }
    },
  };

  WebViewBridge.onNotificationEvent({
    title: 'Вход запрещен',
    msg: 'Дверь закрыта',
    type: 'warning',
    timeout: 5000,
  });

  WebViewBridge.onNotificationEvent({
    title: 'Открыто',
    msg: '',
    type: 'success',
    timeout: 5000,
  });

  WebViewBridge.onNotificationEvent({
    title: 'Неизвестная ошибка',
    msg: 'Обратитесь в службу поддержки',
    type: 'error',
    timeout: 5000,
  });

  WebViewBridge.onNotificationEvent({
    title: 'Информационное сообщение',
    msg: 'Внимание! Собрание собственников квартир состоится 26.07.26 в 19 00 в клубе жильцов. Просьба всем принять участие. После собрания состоится детское мероприятие в 20 00! Далее идёт длинный текст, который обрезается до 300 символов с добавление многоточия в конце. Далее идёт длинный текст, который обрезается до 300 символов',
    type: 'info',
    timeout: 7000,
  });
}
