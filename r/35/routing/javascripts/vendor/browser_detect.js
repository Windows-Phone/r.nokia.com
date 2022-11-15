// http://www.quirksmode.org/js/detect.html
var BrowserDetect = {
	init: function() {
		this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| 'an unknown version';
		this.OS = this.searchString(this.dataOS) || 'an unknown OS';
	},
	searchString: function(data) {
		for (var i=0;i<data.length;i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			} else if (dataProp) {
				return data[i].identity;
			}
		}
	},
	searchVersion: function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: 'Chrome',
			identity: 'Chrome'
		},
		{
			string: navigator.userAgent,
			subString: 'OmniWeb',
			identity: 'OmniWeb',
			versionSearch: 'OmniWeb/'
		},
        {
            string: navigator.userAgent,
            subString: 'SymbianOS',
            identity: 'Symbian',
            versionSearch: 'SymbianOS'
        },
		{
			string: navigator.userAgent,
			subString: 'Symbian',
			identity: 'Symbian',
			versionSearch: 'Symbian'
		},
        {
            string: navigator.userAgent,
            subString: 'Profile/MIDP',
            identity: 'Symbian'
        },
		{
			string: navigator.vendor,
			subString: 'Apple',
			identity: 'Safari',
			versionSearch: 'Version'
		},
		{
			prop: window.opera,
			identity: 'Opera',
			versionSearch: 'Version'
		},
		{
			string: navigator.vendor,
			subString: 'iCab',
			identity: 'iCab'
		},
		{
			string: navigator.vendor,
			subString: 'KDE',
			identity: 'Konqueror'
		},
		{
			string: navigator.userAgent,
			subString: 'Firefox',
			identity: 'Firefox'
		},
		{
			string: navigator.vendor,
			subString: 'Camino',
			identity: 'Camino'
		},
		{
			// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: 'Netscape',
			identity: 'Netscape'
		},
		{
			string: navigator.userAgent,
			subString: 'IEMobile',
			identity: 'IEMobile'
		},
		{
			string: navigator.userAgent,
			subString: 'XBLWP7',
			identity: 'IEMobile',
			versionSearch: 'MSIE'
		},
		{
			string: navigator.userAgent,
			subString: 'WPDesktop',
			identity: 'IEMobile',
			versionSearch: 'MSIE'
		},
		{
			string: navigator.userAgent,
			subString: 'MSIE',
			identity: 'Explorer',
			versionSearch: 'MSIE'
		},
        {
            string: navigator.userAgent,
            subString: 'OSRE',
            identity: 'Symbian'
        },
		{
			string: navigator.userAgent,
			subString: 'Gecko',
			identity: 'Mozilla',
			versionSearch: 'rv'
		},
		{
			// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: 'Mozilla',
			identity: 'Netscape',
			versionSearch: 'Mozilla'
		}
	],
	dataOS: [
		{
			string: navigator.platform,
			subString: 'Win',
			identity: 'Windows'
		},
		{
			string: navigator.platform,
			subString: 'Mac',
			identity: 'Mac'
		},
		{
			string: navigator.userAgent,
			subString: 'iPhone',
			identity: 'iPhone/iPod'
		},
		{
			string: navigator.userAgent,
			subString: 'iPad',
			identity: 'iPad'
		},
        {
			string: navigator.platform,
        	subString: 'Android',
        	identity: 'Android'
		},
		{
			string: navigator.platform,
			subString: 'Linux',
			identity: 'Linux'
		},
		{
			string: navigator.platform,
			subString: 'Symbian',
			identity: 'Symbian'
                }
	]
};

BrowserDetect.init();
