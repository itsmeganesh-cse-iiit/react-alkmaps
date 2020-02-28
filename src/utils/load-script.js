export const loadScript = (url, onLoad, onError) => {
  const existingScript = document.getElementById("mapContainer");
  if (url) {
    if (!existingScript) {
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
    }

    if (existingScript && onLoad) onLoad();
  } else {
    console.warn({ code: "E404", msg: ERROR_CODES.E404 });
    if (onError) onError({ code: "E404", msg: ERROR_CODES.E404 });
  }
};

const ERROR_CODES = {
  E404: "Script URL not Provided"
};
