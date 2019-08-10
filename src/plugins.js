const externalUrls = [];

const injectExternalUrls = urls => {
  urls.forEach(url => {
    const extension = url.split(".").pop();
    let element = null;
    if (extension === "css") {
      element = document.createElement("link");
      element.rel = "stylesheet";
      element.href = "data:text/css," + escape('@import url("' + url + '");');
    } else if (extension === "js") {
      element = document.createElement("script");
      element.setAttribute("src", escape(url));
    } else {
      return;
    }
    document.getElementsByTagName("head")[0].appendChild(element);
  });
};
injectExternalUrls(externalUrls);
