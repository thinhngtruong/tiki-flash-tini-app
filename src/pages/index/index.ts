/// <reference lib="dom" />
// => fix missing setTimeout

// import clone from 'lodash-es/clone';

interface HomeData {
  value: string;
  isLoading: boolean;
  banners: Array<any>;
  activeTab1: any;
  activeTab2: any;
  tabs1: any;
  tabs2: any;
}
interface HomeDataCustomMethods {
  parseDataToString(data: HomeData): string;
  onTabClick: (e: any) => void;
  onChange: (e: any) => void;
}
Page<HomeData, HomeDataCustomMethods>({
  data: {
    value: 'is default value',
    isLoading: false,
    banners: [{ id: 1 }, { id: 2 }],
    activeTab1: 0,
    activeTab2: 0,
    tabs1: [{ title: 'Tab' }, { title: 'Tab' }, { title: 'Tab' }, { title: 'Tab' }],
    tabs2: [
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' },
    ],
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  // @ts-ignore ==> test ts ignore flag
  onLoad(query = {}) {
    setTimeout(() => {
      // this.setData(clone({ value: 'has been changed' }));
    }, 1000);
  },
  parseDataToString(data: Object) {
    return JSON.stringify(data, null, 2);
  },
});
