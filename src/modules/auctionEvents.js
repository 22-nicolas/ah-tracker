let refreshCallback = null;

export function setRefreshCallback(fn) {
  refreshCallback = fn;
}

export function triggerRefresh() {
  if (refreshCallback) refreshCallback();
}
