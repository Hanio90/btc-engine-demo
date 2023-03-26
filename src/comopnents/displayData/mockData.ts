export const mockBtcAddressData = {
  address: "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew",
  total_received: 13623974394090,
  total_sent: 13623974384090,
  balance: 10000,
  n_tx: 6264,
  txs: [
    {
      hash: "374471afc6d2978ee002cf101180b49e5ef066d822d877c4445644f3fc9f1f29",
      fees: 3340,
      size: 407,
      confirmed: "2017-09-12T03:28:56Z",
      received: "2017-09-12T03:28:56Z",
      confirmations: 297730,
      inputs: [
        {
          prev_hash:
            "dab3a5f0d5a2aa9555b6e5d414728bc799d31edc018deba5a83abf40c47ef051",
          output_index: 1,
          script:
            "473044022018c9eb932369a4456454491e05370cad3845262d578e48eccca3b930dd517adc0220517136d0d6bac43b574e1e298c800a7de715ad73f34e91aa09d33e771d7d066e012102cf9334ab934f6a1a8af854d05469a348fa7bda10147ed4c67e5194115c2b05b4",
          output_value: 43589,
          sequence: 4294967295,
          addresses: ["19ieTuZHjMKuyTMDpP3LKjnqWBTMbppmPy"],
          script_type: "pay-to-pubkey-hash",
          age: 484634,
        },
        {
          prev_hash:
            "4e5ecee0a6c36d15f0ce167b5b47cbf8e05279dd24b443ef9524d002460ba12d",
          output_index: 0,
          script:
            "483045022100bf175cddacb27bb39960ee262b5fa9f9f088559a6a7244b013cbbdeda1d805ef02204a5e32b424d3ae669bd2192dcd90713ed916773fe29b160e591cbd596fa8c05b012102cf9334ab934f6a1a8af854d05469a348fa7bda10147ed4c67e5194115c2b05b4",
          output_value: 120000,
          sequence: 4294967295,
          addresses: ["19ieTuZHjMKuyTMDpP3LKjnqWBTMbppmPy"],
          script_type: "pay-to-pubkey-hash",
          age: 484641,
        },
      ],

      outputs: [
        {
          value: 20000,
          script: "76a91435df7e6daa60393b0ed2474a21713a845a2212dd88ac",
          spent_by:
            "1dfa50ff5de09308834d333806c9a70dc663ace1164d68da3d7087fe6b59ebcb",
          addresses: ["15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew"],
          script_type: "pay-to-pubkey-hash",
        },
        {
          value: 20000,
          script: "76a9149c41a721ea7758e6941abcd1060d4f9e92f9562588ac",
          spent_by:
            "786717f85704da5496eed1871b27780a466b61098443b563d7d6ea3e35333f45",
          addresses: ["1FFD4Zr6GLCHa9BfpdphpC7Sa72hGYv7K3"],
          script_type: "pay-to-pubkey-hash",
        },
        {
          value: 120249,
          script: "76a9145fa155807a5f53f8c5cb56813d78d4e16c081c6988ac",
          spent_by:
            "5d759d657d240047544a369832656830169150dc36091b3538db8b2cc76ff6f6",
          addresses: ["19ieTuZHjMKuyTMDpP3LKjnqWBTMbppmPy"],
          script_type: "pay-to-pubkey-hash",
        },
      ],
    },
  ],
};
