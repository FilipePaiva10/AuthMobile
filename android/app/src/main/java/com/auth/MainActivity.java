package com.auth;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "auth";
  }
}
