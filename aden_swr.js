self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		/* pada bagian di atas berfungsi untuk menginstal service worker yang di mana akan tampil di bagian console apabila berhasil terinstal*/
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
});
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
		/*pada bagian di gunakan untuk mengaktivkan server worker*/
});
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
		/*pada bagian di atas berfungsi untuk mengambil data yang mana akan menampilkan URL yang telah di ambil*/
});