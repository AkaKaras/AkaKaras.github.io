class RenderActions {
	static $getRenderedAction (it) {
		return $$`
		${Renderer.utils.getBorderTr()}
		${Renderer.utils.getExcludedTr(it, "action")}
		${Renderer.utils.getNameTr(it, {page: UrlUtil.PG_ACTIONS})}
		<tr><td class="divider" colspan="6"><div></div></td></tr>
		<tr class="text"><td colspan="6">
		${Renderer.get().setFirstSection(true).render({entries: it.entries})}
		${it.fromVariant ? `<div>${Renderer.get().render(`{@note 该动作是游戏可选的额外选项，来自于可选/变体规则 {@variantrule ${it.fromVariant}}。}`)}</div>` : ""}
		${it.seeAlsoAction ? `<div>${Renderer.get().render(`{@note 另见：${it.seeAlsoAction.map(it => `{@action ${it}}`).join(", ")}。}`)}</div>` : ""}
		</td></tr>
		${Renderer.utils.getPageTr(it)}
		${Renderer.utils.getBorderTr()}
		`
	}
}
