# Estimote UWB Tags Configuration 🚀

This repository contains the code for configuring and operating **Estimote UWB Tags** in two primary roles: **TOF_RESPONDER** and **TOF_INITIATOR**. These roles enable distance measurement and communication within a UWB network. Additionally, tags can be configured to operate in a dual-channel mode, where a single tag acts as both an Initiator and a Responder.

## Overview 🌐
Estimote UWB Tags use Ultra-Wideband technology to perform accurate distance measurements. This project supports:

1. **TOF_RESPONDER:** A tag that listens for distance measurement requests and provides responses.
2. **TOF_INITIATOR:** A tag that initiates distance measurement requests to other tags in the UWB network.

The tags must be paired and configured through [Estimote Cloud](https://cloud.estimote.com). The code must be uploaded via the Estimote IDE.

## Features ✨
- **Configurable Operation Modes:** Adjust settings like timeout, operating mode, and network identifier (PAN ID).
- **Distance Filtering:** Set minimum and maximum distances for reporting.
- **Cloud Integration:** Responder tags send distance data to Estimote Cloud for analysis.

## How It Works ⚙️
1. **Responder Role:**
   - Listens for incoming requests.
   - Computes distance based on the received signal.
   - Sends distance data to the Estimote Cloud.

2. **Initiator Role:**
   - Sends distance measurement requests.
   - Processes the responses to determine distance to target tags.

## Setup 🛠️
1. Pair your UWB tags in [Estimote Cloud](https://cloud.estimote.com).
2. Clone this repository:
   ```bash
   git clone <repository_url>
3. Open the Estimote IDE and upload the corresponding script.
4. Deploy the code to your UWB tags via the Estimote IDE.
   
