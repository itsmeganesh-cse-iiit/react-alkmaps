/**
 * @param  {string} url AlkMaps script url
 * @param  {func} onLoad Invoked after script load
 * @param  {func} onError Invoked after script fail
 */
export const loadScript = (url, onLoad, onError) => {
  const existingScript = document.getElementById("mainMap");
  if (url) {
    // if (!existingScript) {
    const script = document.createElement("script");
    script.src = url;
    script.id = "alkmaps";
    document.head.appendChild(script);

    script.onload = () => {
      if (onLoad) onLoad(window.ALKMaps);
    };

    script.onerror = error => {
      if (onError) onError(error);
    };
    // }

    if (existingScript && onLoad) onLoad();
  } else {
    if (onError) onError({ code: "E404", msg: ERROR_CODES.E404 });
    throw new Error(`${"E404"}- ${ERROR_CODES.E404}`);
  }
};

const ERROR_CODES = {
  E404: "Script URL not provided"
};
Object.freeze(ERROR_CODES);
