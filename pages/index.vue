<template>
	<div class="main">
		<client-only>
			<vue-html2pdf
				ref="html2Pdf"
				:show-layout="true"
				:float-layout="true"
				:enable-download="true"
				:preview-modal="true"
				filename="hee hee"
				:pdf-quality="2"
				:manual-pagination="false"
				:paginate-elements-by-height="1100"
				pdf-format="a4"
				pdf-orientation="portrait"
				pdf-content-width="800px"
				@progress="onProgress($event)"
				@startPagination="startPagination()"
				@hasStartedGeneration="hasStartedGeneration()"
				@hasGenerated="hasGenerated($event)"
			>
				<PdfContent slot="pdf-content" />
			</vue-html2pdf>
		</client-only>
		<button class="download-btn" @click="downloadPdf">download</button>
	</div>
</template>

<script>
import PdfContent from '~/components/PdfContent';
export default {
	components: {
		PdfContent,
	},
	computed: {
		htmlToPdfOptions() {
			return {
				margin: 1,

				filename: 'hee hee.pdf',

				image: {
					type: 'png',
					quality: 0.98,
				},

				enableLinks: true,

				html2canvas: {
					scale: 2,
					dpi: 300,
					scrollY: 0,
					scrollX: 0,
					useCORS: true,
				},

				jsPDF: {
					unit: 'px',
					format: 'a4',
					orientation: 'portrait',
				},
			};
		},
	},
	methods: {
		downloadPdf() {
			this.$refs.html2Pdf.generatePdf();
		},
		startPagination() {
			console.log(`PDF has started pagination`);
		},
		onProgress(progress) {
			this.progress = progress;
			console.log(`PDF generation progress: ${progress}%`);
		},
		hasGenerated(progress) {
			this.progress = progress;
			console.log(`PDF hasGenerated: ${progress}%`);
		},
		hasStartedGeneration() {
			console.log('has start generation');
		},
	},
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.download-btn {
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 999999;
}
</style>
