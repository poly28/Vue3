const App1 = {
	data() {
		return {
			itemList: [
				{ id: 0, text: '0' },
				{ id: 1, text: '1' },
				{ id: 2, text: '2' },
			],
		};
	},
};
app1 = Vue.createApp(App1);

app1.component('template1', {
	props: ['prop1'],
	template: `
	<li>{{prop1.id}}は{{prop1.text}}番です</li>
	`,
});

app1.mount('#app1');
