---
sidebar_position: 2
---

# Download Karpet
This tutorial will show you how to download and run karpet


## Download Links
Download from [GitHub](https://github.com/KarpetPowered/Karpet/releases)

## Using the installer
:::caution

The installer is for **LINUX ONLY**
It also requires Java to run.
:::

The installer can be downloaded from the latest GitHub release as a jar file.
Once downloaded launch the jar and select the karpet version to install, then click ```Install```

![Karpet installer](/img/installer.png)

Once open input the **FULL PATH** to the folder you wish to install the server too. Then click install, the application may freeze(multithreading is hard alright!), give it time.

## Without the installer
:::tip

If you want to avoid using the command-line use the installer instead.
:::

First go to the [Karpet GitHub](https://github.com/KarpetPowered/Karpet.git), and download the latest karpet server jar file from the release tab. Now create a folder in your terminal like below:
```bash
mkdir -p ~/mcserver
```
Then copy the server jar file into this folder like below:
```bash
cp ~/Downloads/karpet-server.jar ~/mcserver/
```
You can now cd into that directory and run the server file
```bash
cd ~/mcserver
java -jar karpet-server.jar
```
