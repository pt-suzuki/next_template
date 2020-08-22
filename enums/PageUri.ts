export module PageUri {
  const TMP_LIST: string = '/list';
  const TMP_CONTENT: string = '/';
  const TMP_EDIT: string = '/edit';

  export module AUTH {
    export const SIGN_IN = '/signin';
  }

  export const Error = '/error';

  export module ATTENDANCE {
    const TMP_ATTENDANCE = '/attendance';
    export const LIST = TMP_ATTENDANCE + TMP_LIST;
    export const CONTENT = TMP_ATTENDANCE + TMP_CONTENT;
  }

  export module CUSTOMER {
    const TMP_CUSTOMER = '/customer';
    export module USER {
      const TMP_USER = `${TMP_CUSTOMER}/user`;
      export const LIST = TMP_USER + TMP_LIST;
      export const EDIT = TMP_USER + TMP_EDIT;
      export const CONTENT = TMP_USER + TMP_CONTENT;
    }
    export const LIST = TMP_CUSTOMER + TMP_LIST;
    export const CONTENT = TMP_CUSTOMER + TMP_CONTENT;
    export const EDIT = TMP_CUSTOMER + TMP_EDIT;
  }

  export module ENGINEER {
    const TMP_ENGINEER = '/engineer';
    export const LIST = TMP_ENGINEER + TMP_LIST;
    export const CONTENT = TMP_ENGINEER + TMP_CONTENT;
  }

  export module EXPENSES_APPLICATION {
    const TMP_EXPENSES_APPLICATION = '/expenses_application';
    export const LIST = TMP_EXPENSES_APPLICATION + TMP_LIST;
    export const EDIT = TMP_EXPENSES_APPLICATION + TMP_EDIT;
    export const FLOW = `${TMP_EXPENSES_APPLICATION}/flow`;
    export module STEP {
      const TMP_STEP = `${TMP_EXPENSES_APPLICATION}/step`;
      export const LIST = TMP_STEP + TMP_LIST;
      export const EDIT = TMP_STEP + TMP_EDIT;
    }
  }

  export module INVOICE {
    const TMP_INVOICE = '/invoice';
    export const LIST = TMP_INVOICE + TMP_LIST;
    export const CONTENT = TMP_INVOICE + TMP_CONTENT;
  }

  export module SKILL_SHEET {
    const TMP_SKILL_SHEET = '/skill_sheet';
    export const LIST = TMP_SKILL_SHEET + TMP_LIST;
    export const CONTENT = TMP_SKILL_SHEET + TMP_CONTENT;
  }

  export module JOB {
    const TMP_JOB = '/job';
    export const LIST = TMP_JOB + TMP_LIST;
    export const CONTENT = TMP_JOB + TMP_CONTENT;
    export const EDIT = TMP_JOB + TMP_EDIT;

    export module PROJECT {
      const TMP_PROJECT = `${TMP_JOB}/project`;
      export const LIST = TMP_PROJECT + TMP_LIST;
      export const CONTENT = TMP_PROJECT + TMP_CONTENT;
      export const EDIT = TMP_PROJECT + TMP_EDIT;
    }
    export module CATEGORY {
      const TMP_CATEGORY = `${TMP_JOB}/category`;
      export const LIST = TMP_CATEGORY + TMP_LIST;
      export const CONTENT = TMP_CATEGORY + TMP_CONTENT;
      export const EDIT = TMP_CATEGORY + TMP_EDIT;
    }
    export module SUBJECT {
      const TMP_SUBJECT = `${TMP_JOB}/subject`;
      export const LIST = TMP_SUBJECT + TMP_LIST;
      export const CONTENT = TMP_SUBJECT + TMP_CONTENT;
      export const EDIT = TMP_SUBJECT + TMP_EDIT;
    }
    export module FLOW {
      const TMP_FLOW = `${TMP_JOB}/flow`;
      export const LIST = TMP_FLOW + TMP_LIST;
      export const CONTENT = TMP_FLOW + TMP_CONTENT;
      export const EDIT = TMP_FLOW + TMP_EDIT;
    }

    export module STEP {
      const TMP_STEP = `${TMP_JOB}/step`;
      export const LIST = TMP_STEP + TMP_LIST;
      export const CONTENT = TMP_STEP + TMP_CONTENT;
      export const EDIT = TMP_STEP + TMP_EDIT;
    }
  }

  export module TRANSPORTATION_EXPENSES {
    const TMP_TRANSPORTATION_EXPENSES = '/transportation_expenses';
    export const LIST = TMP_TRANSPORTATION_EXPENSES + TMP_LIST;
    export const CONTENT = TMP_TRANSPORTATION_EXPENSES + TMP_CONTENT;
  }

  export module USER {
    const TMP_USER = '/user';
    export const LIST = TMP_USER + TMP_LIST;
    export const CONTENT = TMP_USER + TMP_CONTENT;
    export const EDIT = TMP_USER + TMP_EDIT;

    export module ROLE {
      const TMP_ROLE = `${TMP_USER}/role`;
      export const LIST = TMP_ROLE + TMP_LIST;
      export const CONTENT = TMP_ROLE + TMP_CONTENT;
      export const EDIT = TMP_ROLE + TMP_EDIT;
    }
  }

  export module GROUP {
    const TMP_GROUP = '/group';
    export const LIST = TMP_GROUP + TMP_LIST;
    export const CONTENT = TMP_GROUP + TMP_CONTENT;
    export const EDIT = TMP_GROUP + TMP_EDIT;
  }

  export const DASH_BOARD = '/dash_board';
  export const NOT_FOUND = '/not_found';
}
