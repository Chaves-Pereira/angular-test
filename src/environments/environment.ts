// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bruitConfig: {
    apiKey: "44a63ba8-d93b-484f-b22f-15bcf45851c8",
    labels: {
      title: "Send us a feedback",
      introduction: "Send us a feedback with bruit.io..."
    },
    form: [
      {
        label: "Question ?",
        type: "text",
        id: "title"
      },
      {
        label: "Rate",
        type: "rating",
        required: true,
        max: 5
      },
      {
        label: "Your email",
        type: "email",
        required: true
      },
      {
        label: "testtest",
        type: "select",
        required: true,
        options: ['a', 'b', 'c']
      },
      {
        label: "Lorem",
        type: "textarea",
        required: true
      },
      {
        id: "agreement",
        type: "checkbox",
        label: "I agree to send technical information in addition to my answers",
        value: null
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
