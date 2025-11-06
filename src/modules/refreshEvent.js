let linkedFns = []

export function fireRefreshEvent() {
	linkedFns.forEach(fn => fn())
}

export function suscribeToRefreshBtn(fn) {
	if (!linkedFns.includes(fn)) {
		linkedFns.push(fn)
	}
}