export module ApiUri {
  const DOMAIN: string | undefined = process.env.API_URL;
  const BASE_URL: string = `${DOMAIN}/api/`;

  export module OAUTH {
    const TMP_OAUTH: string = `${DOMAIN}/oauth/`;
    export const ACCESS_TOKEN = `${TMP_OAUTH}token/`;
    export const LOGIN_CHECK = `${BASE_URL}login/check`;
    export const LOGIN_HISTORY = `${BASE_URL}login/history`;
    export const ADMIN_CHECK = `${BASE_URL}login/admin`;
  }

  export module HISTORY {
    const TMP_HISTORY: string = `${BASE_URL}history/`;
    export const LOGIN = `${TMP_HISTORY}login`;
  }

  export module DROP_DOWN {
    const TMP_DROP_DOWN: string = `${BASE_URL}drop_down/`;

    export module GROUP {
      const TMP_GROUP = `${TMP_DROP_DOWN}group`;
      export const BASIC = `${TMP_GROUP}`;
      export const CURRENT_USER = `${TMP_GROUP}/current_user`;
      export const ROLE = `${TMP_GROUP}/role`;
    }

    export module PROJECT {
      const TMP_PROJECT = `${TMP_DROP_DOWN}project`;
      export const BASIC = `${TMP_PROJECT}`;
      export const STATUS = `${TMP_PROJECT}/status`;
    }

    export const PREFECTURES_CODE: string = `${TMP_DROP_DOWN}prefectures_code`;
    export const USER: string = `${TMP_DROP_DOWN}user`;
    export const STEP: string = `${TMP_DROP_DOWN}step`;
    export const ROLE: string = `${TMP_DROP_DOWN}role`;
    export const SUBJECT: string = `${TMP_DROP_DOWN}subject`;
    export const SUBJECT_CATEGORY: string = `${TMP_DROP_DOWN}subject/category`;
    export const CYCLE: string = `${TMP_DROP_DOWN}cycle`;
    export const PRIORITY: string = `${TMP_DROP_DOWN}priority`;

    export const CUSTOMER = `${TMP_DROP_DOWN}customer`;
    export const CUSTOMER_SUBJECT = `${TMP_DROP_DOWN}customer/subject`;
    export const CUSTOMER_TYPE = `${TMP_DROP_DOWN}customer/type`;
    export const CUSTOMER_CONTRACT = `${TMP_DROP_DOWN}customer/contract`;
    export const ACCOUNT_TITLE = `${TMP_DROP_DOWN}account_title`;
  }

  export module GROUP {
    const TMP_GROUP: string = `${BASE_URL}group`;
    export const BASIC = TMP_GROUP;
  }

  export module STEP_FLOW {
    const TMP_STEP_FLOW: string = `${BASE_URL}step_flow`;
    export const BASIC = TMP_STEP_FLOW;
    export const LIST = `${TMP_STEP_FLOW}/list`;
  }

  export module SUPPORTED_MEMO {
    const TMP_SUPPORTED_MEMO: string = `${BASE_URL}supported_memo`;
    export const BASIC = TMP_SUPPORTED_MEMO;
  }

  export module PROJECT {
    const TMP_PROJECT: string = `${BASE_URL}project`;
    export const BASIC = TMP_PROJECT;
  }

  export module NOTIFICATION {
    const TMP_NOTIFICATION: string = `${BASE_URL}notification`;
    export const BASIC = TMP_NOTIFICATION;
  }

  export module JOB {
    const TMP_JOB: string = `${BASE_URL}job`;
    export const BASIC = TMP_JOB;
    export const NEXT_STEP = `${TMP_JOB}/next_step`;
    export const COMPLETE_STEP = `${TMP_JOB}/complete_step/`;
    export module REJECT_STEP {
      const TMP_REJECT_STEP: string = `${TMP_JOB}/reject_step/`;
      export const R_BASIC = `${TMP_REJECT_STEP}`;
      export const SINGLE = `${TMP_REJECT_STEP}single/`;
    }
    export const LOG = `${TMP_JOB}/log`;
    export const REJECT = `${TMP_JOB}/reject/`;
    export const REJECT_RESET = `${TMP_JOB}/reject/reset/`;
    export module UPLOAD {
      const TMP_UPLOAD: string = `${TMP_JOB}/upload/`;
      export const DOCUMENT = `${TMP_UPLOAD}document/`;
    }
  }

  export module SUBJECT {
    const TMP_SUBJECT: string = `${BASE_URL}subject`;
    export const BASIC = TMP_SUBJECT;
    export const CATEGORY = `${TMP_SUBJECT}/category`;
  }

  export module STEP {
    const TMP_STEP: string = `${BASE_URL}step`;
    export const BASIC = TMP_STEP;
    export const LIST = `${TMP_STEP}/list`;
  }

  export module CUSTOMER {
    const TMP_CUSTOMER: string = `${BASE_URL}customer`;
    export module USER {
      const TMP_USER = `${TMP_CUSTOMER}/user`;
      export const BASIC = `${TMP_USER}`;
      export const UPLOAD = `${TMP_USER}/upload`;
    }
    export const BASIC = TMP_CUSTOMER;
  }

  export module USER {
    const TMP_USER: string = `${BASE_URL}user`;
    export const BASIC = TMP_USER;
    export const PASSWORD = `${TMP_USER}/password`;
    export const DIVISION = `${TMP_USER}/division`;
    export const CURRENT = `${TMP_USER}/current`;
    export const MENU = `${TMP_USER}/menu`;
    export const IS_LOCK = `${TMP_USER}/is_lock`;
    export module AUTH_FAIL_COUNT {
      const TMP_AUTH_FAIL_COUNT = `${TMP_USER}/auth_fail_count`;
      export const CLEAR = `${TMP_AUTH_FAIL_COUNT}/clear`;
      export const INCREMENT = `${TMP_AUTH_FAIL_COUNT}/increment`;
    }
    export module CHECK {
      export const TMP_CHECK = `${TMP_USER}/check`;
      export const PASSWORD_EXPIRATION_DATE = `${TMP_CHECK}/password_expiration_date`;
    }

    export module UPLOAD {
      const TMP_UPLOAD: string = `${TMP_USER}/upload/`;
      export const IMAGE = `${TMP_UPLOAD}image/`;
    }
  }

  export module ROLE {
    const TMP_ROLE: string = `${BASE_URL}role`;
    export const BASIC = TMP_ROLE;
  }
}
