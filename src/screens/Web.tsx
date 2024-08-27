import React from 'react'
import { WebView } from 'react-native-webview'

const Web = () => {
    const INJECTED_JAVASCRIPT = `(function() {
        document.getElementsByTagName('header')[0].style.display = 'none';
    })();`;

    return (
        <WebView source={{ uri: 'http://gweb.ecelticgroup.com/' }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            style={{ flex: 1 }} />
    )
}

export default Web
