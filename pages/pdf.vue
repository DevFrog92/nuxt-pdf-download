<template>
	<section class="page_to_print">this is page</section>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
	data() {
		return {
			opt: {
				margin: 0,
				filename: 'test.pdf',

				image: {
					type: 'png',
					quality: 0.98,
				},

				enableLinks: false,

				html2canvas: {
					dpi: 300,
					scale: 1,
					useCORS: true,
					width: 1200,
					// height: 1696 * 2,
					scrollX: 0,
					scrollY: 0,
				},
				jsPDF: {
					unit: 'mm',
					format: 'a4',
					orientation: 'portrait',
					compressPDF: true,
				},
			},
		};
	},
	mounted() {
		const worker = html2pdf();
		console.log(worker);
	},
	methods: {
		save() {},
	},
};
</script>

<style></style>
