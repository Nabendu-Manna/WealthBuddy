import React from 'react'
import { Text } from 'react-native';
import { WebView } from 'react-native-webview'

const Web = ({ navigation }): JSX.Element => {
    navigation.addListener('tabPress', (e) => {
        // Prevent default action
        // e.preventDefault();
    });

    const INJECTED_JAVASCRIPT = `

    (function() {
        document.getElementById('pospLoginButton').addEventListener('click', function(e) {
            
            window.ReactNativeWebView.postMessage('');
        });
    })();
    `;

    const [webViewStatus, setWebViewStatus] = React.useState('No');

    return (
        <>
            <Text style={{ color: '#000000' }}>{webViewStatus}</Text>
            <WebView source={{ uri: 'http://gweb.ecelticgroup.com/' }}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                style={{ flex: 1 }} onMessage={() => setWebViewStatus('Yes')} />

        </>
    )
}

export default Web
