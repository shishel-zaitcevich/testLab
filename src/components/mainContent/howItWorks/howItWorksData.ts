import { howItWorksType } from "mainTypes";
import HowItWorksImg from '../../../assets/images/how_work_1.png'
import DeliveryTrack from '../../../assets/images/delivery-truck.png'
import Secure from '../../../assets/images/secure.png'
import MoneyBags from '../../../assets/images/money-bags.png'

export const howItWorksData: howItWorksType[] = [
    {
      title: 'Прочитай задание внимательно',
      text: 'Думаю у тебя не займет это больше двух-трех минут',
      img: HowItWorksImg,
    },
    {
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле',
        img: DeliveryTrack,
      },
      {
        title: 'Сделай хорошо',
        text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
        img: Secure,
      },
      {
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
        img: MoneyBags,
      },
  ];