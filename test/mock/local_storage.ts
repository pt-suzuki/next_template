const localStorageMock = (function () {
  const initialStore = {
    'calc.companyId': '',
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any = initialStore;
  return {
    getItem: function (key: string) {
      return store[key];
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = initialStore;
    },
    removeItem: function (key: string) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

export const setMockCompanyId = (id = 1): void => {
  localStorageMock.setItem('calc.companyId', String(id));
};

export const clearMockCompany = (): void => {
  localStorageMock.clear();
};
