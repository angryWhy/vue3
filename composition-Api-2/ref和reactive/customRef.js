import { customRef } from "vue";
// 自定义ref
export default function (value) {
  return customRef((track, trigger) => {
    let timer = null;
    return {
      get() {
        //
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 2200);
      },
    };
  });
}
