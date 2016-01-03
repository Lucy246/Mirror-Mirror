package com.ces2016.mirror;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.KeyEvent;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Mirror extends AppCompatActivity {

    private int GESTURE_CLOCKWISE_CIRCLE = 0x00000001;
    private int GESTURE_COUNTER_CLOCKWISE_CIRCLE = 0x00000002;
    private int GESTURE_FINGER = 0x00000004;
    private int GESTURE_FIST_DETECTED = 0x00000008;
    private int GESTURE_LIKE = 0x00000010;
    private int GESTURE_MUTE = 0x00000020;
    private int GESTURE_OPEN_HAND = 0x00000040;
    private int GESTURE_OPEN_HAND_DOWN = 0x00000080;
    private int GESTURE_OPEN_HAND_LEFT = 0x00000100;
    private int GESTURE_OPEN_HAND_RIGHT = 0x00000200;
    private int GESTURE_OPEN_HAND_UP = 0x00000400;
    private int GESTURE_SWIPE_LEFT = 0x00000800;
    private int GESTURE_SWIPE_RIGHT = 0x00001000;

    private WebView myWebView;
    private WebSettings myWebSettings;

    Logger log = Logger.getGlobal();

    Intent intent;
    int supportGesture;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mirror);

        loadGestures();
        loadWebView();

    }

    @Override
    protected void onResume() {
        super.onResume();
        startService(intent);
    }

    @Override
    protected void onPause() {
        super.onPause();
        stopService(intent);
    }

    /**
     * Key presses from gestures are actually pushed straight to the WebView and handled by the
     * Javascript there, so this is just in case we want to add some client-side features...
     *
     * @param keyCode
     * @param event
     * @return
     */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {

        switch(keyCode){
            case KeyEvent.KEYCODE_DPAD_UP:
                myWebView.loadUrl("javascript:alert('dpad up');");
                return true;
            case KeyEvent.KEYCODE_DPAD_DOWN:
                myWebView.loadUrl("javascript:alert('dpad down');");
                return true;
            //case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:
            case KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU:
                myWebView.loadUrl("javascript:alert('media play pause');");
                return true;
        }

        return super.onKeyDown(keyCode, event);
    }

    private void loadWebView() {
        myWebView = (WebView) findViewById(R.id.webView);
        myWebSettings = myWebView.getSettings();
        myWebSettings.setJavaScriptEnabled(true);

        // http://stackoverflow.com/questions/7746409/android-webview-launches-browser-when-calling-loadurl
        myWebView.setWebViewClient(new WebViewClient());

        myWebView.loadUrl("http://ec19151d.ngrok.io/"); // http://unixpapa.com/js/testkey.html
    }


    private void loadGestures() {
        intent = new Intent();
        ComponentName com = new ComponentName("com.tcl.bigpad.gesture", "com.tcl.bigpad.gesture.GestureService");

        intent.setComponent(com);

        supportGesture |= GESTURE_OPEN_HAND;
        supportGesture |= GESTURE_SWIPE_LEFT;
        supportGesture |= GESTURE_SWIPE_RIGHT;
        // supportGesture |= GESTURE_MUTE;
        // supportGesture |= GESTURE_LIKE;

        intent.putExtra("supportgesture", supportGesture);
    }
}
