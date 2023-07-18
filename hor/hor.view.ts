namespace $.$$ {

	export class $bun_scroll_hor extends $.$bun_scroll_hor {

		@ $mol_action
		on_wheel( e: WheelEvent ) {
			var node = this.dom_node()

			var delta = e.deltaY

			node.scrollLeft += delta
		}

	}

}