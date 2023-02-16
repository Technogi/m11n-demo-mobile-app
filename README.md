# Instalación y configuración de proyecto
## Setup ambiente de desarrollo para compilar proyecto (es importante tener estas versiones instaladas para evitar problemas de compilación)
Seguir pasos de instalación de la documentación de [Getting Started](https://reactnative.dev/docs/environment-setup) de React Native CLI Quickstart para iOS y Android.

- Homebrew
- node v18.14.0 o superior (es recomendable instalar node a través de Homebrew)
- npm (la versión que traiga con node)
- XCode (última versión)
- Java SE Development Kit (JDK) v11.x.x o superior
- Android Studio (previamente instalar JDK)
- Cocoapods v1.11.3 o superior

## Instalación de proyecto (los siguientes comandos se deben ejecutar dentro de la carpeta raíz del proyecto)

- Una vez descargado el proyecto se debe aplicar los siguientes comandos:
```
npm install
cd ios && pod install && cd ..
npm run build:ios
```

### XCode

- Abrir XCode y abrir el archivo del proyecto *app_name.xcworkspace*
- En la pestaña *General*, revisar el apartado *Signing* y seleccionar *Automatically manage signing*. En el campo *Team* seleccionar el certificado con el nombre de la entidad o programador (en este caso seria Technogi).
- En el apartado de *Deployment Info* seleccionar *iPhone* en el campo *Devices*.

**Nota:** para poder realizar los pasos anteriores en XCode es necesario contar previamente con los certificados descargados del proyecto para poder firmar la app.

### Correr app para iOS y Android (cambiar *ios* por *android*)

Ejecutar este comando para correr la aplicación:
```
npx react-native run-ios
```

El comando anterior para ios abrirá el simulador de XCode, si se desea correr la app directamente en un dispositivo físco seguir [Running On Device](https://facebook.github.io/react-native/docs/running-on-device.html) de la documentación de React Native.

## Firmar app para subir a tiendas (Google Play Store y App Store)

### Android

- Es necesario solicitar a la persona que tenga el *gradle.properties* con el alias y password que permite firmar la app en modo release para subirlo a la Google Play Store. Se debe colocar el gradle.properties en *GRADLE_USER_HOME* (MAC):
```
/Users/user_name/.gradle/gradle.properties
```

- Solicitar también el archivo *.keystore*, ya que este archivo permitirá firmar la app usando las credenciales que se encuentran en el gradle.properties y colocarlo en la siguiente ruta del proyecto:
```
[app_name]-app/android/app/[app_name]-key.keystore
```

- Una vez colocado el gradle.properties en la ruta correcta seguir este tutorial: [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html). El proyecto ya ha sido configurado con los keys de [app_name], por lo que solo se tendría que aplicar el siguiente comando del tutorial para generar el apk  que servirá para enviarlo a usuarios de prueba (este comando generará un archivo *app-release.apk* que se encuentra en la ruta android/app/build/outputs/apk/app-release.apk):
```
cd android && ./gradlew assembleRelease
```

- Para crear el archivo que se subirá a la tienda es necesario aplicar este comando (este comando generará un archivo *app-release.aab* que se encuentra en la ruta android/app/build/outputs/bundle/app-release.aab):
```
cd android && ./gradlew bundleRelease
```


### iOS
- Seguir este tutorial en el apartado de [Building your app for production](https://facebook.github.io/react-native/docs/running-on-device.html) a partir del punto 2 al 4.

## Debuguear app con React Native Debugger (este paso ya no es necesario, se recomienda usar Flipper)

Esta app permite tener en una sola ventana React DevTools, Redux DevTools y Chrome DevTools facilitando el debugueo de una app, esta app ya está habilitada en el proyecto, solo es necesario instalarla usando homebrew:

```
brew cask install react-native-debugger
```

Para mayor información o pasos para su instalación visitar [Supercharge Your React Native Development With React-Native-Debugger](https://levelup.gitconnected.com/supercharge-your-react-native-development-with-react-native-debugger-7633882683a9)


## Modificar versión de la app (Automático)

Para cambiar la versión de la app tanto para iOS como Android solo es necesario modificar las variables *APP_VERSION_NAME* y *APP_VERSION_CODE* del archivo *.env* localizado en la raíz del proyecto.

**Nota (aplica únicamente para Android):** en realidad la propiedad que se tomará en cuenta para la tienda de Google Play será *APP_VERSION_CODE (versionCode)*, ya que *APP_VERSION_NAME (versionName)* solo se ocupa para mostrarle a los usuarios el número de versión, por ello es recomendable que estas dos propiedades tengan un patrón en común, por ejemplo:

Si se actualizará la app a la versión 1.5.1 se podría poner esta versión para *APP_VERSION_NAME* y en *APP_VERSION_CODE* manejarla como 10501 (esta es la nomenclatura que usa ionic al convertir los puntos en 0's). Si se tiene una versión 1.5.15 se cambiaría a 10515 para *APP_VERSION_CODE*.

## Modificar versión de la app (Manual)

Cambiar la versión de la app en *constants.js* (AppVersion). Esta constante es la versión que se muestra en la página de Settings.

### Android

Para modificar la versión de la app en Android es necesario entrar en la siguiente ruta *android/app/build.gradle* y modificar las propiedadades *versionCode* y *versionName* del objeto *defaultConfig*:

```
defaultConfig {
        applicationId "com.alucinastudio.ocesa"
        minSdkVersion 16
        targetSdkVersion 23
        versionCode 10501
        versionName "1.5.1"
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }
```

en realidad la propiedad que se tomará en cuenta para la tienda de Google Play será *versionCode*, ya que *versionName* solo se ocupa para mostrarle a los usuarios el número de versión, por ello es recomendable que estas dos propiedades tengan un patrón en común, por ejemplo:

Si se actualizará la app a la versión 1.5.1 se podría poner esta versión para *versionName* y en *versionCode* manejarla como 10501 (esta es la nomenclatura que usa ionic al convertir los puntos en 0's). Si se tiene una versión 1.5.15 se cambiaría a 10515 para *versionCode*.

### iOS

Se debe modificar en XCode abriendo el archivo del proyecto *ocesa_app.xcworkspace* y en la pestaña *General* modificar la propiedad *Version*. La propiedad *Build* se puede usar para mantener la misma versión de la app y solo subir diferentes compilaciones en la App Store Connect cuando se hicieron cambios mínimos en la app (ya que no se pueden eliminar las versiones subidas a la tienda de Apple). Por ejemplo se podría poner *Version* 1.5.1 y *Build* 2, al final se verá en la tienda como:

1.5.1 (2)

de esta forma se podria volver a subir la misma versión a la tienda solo cambiando la propiedad *Build* a 3:

1.5.1 (3)
