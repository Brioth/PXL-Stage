import {Resource } from '../../models/resource';
import { OpdrachtType } from '../../models/opdracht';

export const RESOURCES: Resource[] =
[{
  "id": 1,
  "naam": "Inigo Durrance",
  "maxEffort": 7,
  "opdrachten": null
}, {
  "id": 2,
  "naam": "Pavia Linscott",
  "maxEffort": 53,
  "opdrachten": null
}, {
  "id": 3,
  "naam": "Annabal Hughland",
  "maxEffort": 70,
  "opdrachten": [
    {
      "type": OpdrachtType.variabel,
      "id": 1,
      "effort": 50,
      "beschrijving": "whiteboard revolutionary methodologies"
    },
    {
      "type": OpdrachtType.vast,
      "id": 2,
      "effort": 34,
      "beschrijving": "matrix plug-and-play mindshare"
    },
    {
      "type": OpdrachtType.vast,
      "id": 3,
      "effort": 1,
      "beschrijving": "revolutionize vertical bandwidth"
    },
    {
      "type": OpdrachtType.variabel,
      "id": 4,
      "effort": 25,
      "beschrijving": "target open-source communities"
    }
  ]
}, {
  "id": 4,
  "naam": "Thoma Wingrove",
  "maxEffort": 16,
  "opdrachten": [
    {
      "type": OpdrachtType.variabel,
      "id": 1,
      "effort": 26,
      "beschrijving": "deploy interactive channels"
    },
    {
      "type": OpdrachtType.vast,
      "id": 2,
      "effort": 38,
      "beschrijving": "incentivize web-enabled vortals"
    },
    {
      "type": OpdrachtType.vast,
      "id": 3,
      "effort": 49,
      "beschrijving": "aggregate holistic experiences"
    },
    {
      "type": OpdrachtType.vast,
      "id": 4,
      "effort": 29,
      "beschrijving": "deliver cross-platform schemas"
    }
  ]
}, {
  "id": 5,
  "naam": "Julio Cheng",
  "maxEffort": 74,
  "opdrachten": [
    {
      "type": OpdrachtType.vast,
      "id": 1,
      "effort": 8,
      "beschrijving": "deliver B2C metrics"
    },
    {
      "type": OpdrachtType.vast,
      "id": 2,
      "effort": 25,
      "beschrijving": "enable out-of-the-box solutions"
    },
    {
      "type": OpdrachtType.vast,
      "id": 3,
      "effort": 12,
      "beschrijving": "transition interactive e-business"
    }
  ]
}, {
  "id": 6,
  "naam": "Patrice Brock",
  "maxEffort": 28,
  "opdrachten": [
    {
      "type": OpdrachtType.vast,
      "id": 1,
      "effort": 12,
      "beschrijving": "unleash seamless convergence"
    },
    {
      "type": OpdrachtType.variabel,
      "id": 2,
      "effort": 35,
      "beschrijving": "syndicate enterprise vortals"
    }
  ]
}, {
  "id": 7,
  "naam": "Nonna Batrim",
  "maxEffort": 74,
  "opdrachten": null
}, {
  "id": 8,
  "naam": "Keene Lancaster",
  "maxEffort": 62,
  "opdrachten": [
    {
      "type": OpdrachtType.variabel,
      "id": 1,
      "effort": 35,
      "beschrijving": "implement killer web services"
    },
    {
      "type": OpdrachtType.vast,
      "id": 2,
      "effort": 19,
      "beschrijving": "enable B2B e-business"
    },
    {
      "type": OpdrachtType.variabel,
      "id": 3,
      "effort": 47,
      "beschrijving": "visualize cross-platform communities"
    }
  ]
}, {
  "id": 9,
  "naam": "Wallace Graveney",
  "maxEffort": 17,
  "opdrachten": [
    {
      "type": OpdrachtType.variabel,
      "id": 1,
      "effort": 14,
      "beschrijving": "embrace value-added partnerships"
    }
  ]
}, {
  "id": 10,
  "naam": "Lauraine Tuberfield",
  "maxEffort": 47,
  "opdrachten": [
    {
      "type": OpdrachtType.vast,
      "id": 1,
      "effort": 13,
      "beschrijving": "cultivate revolutionary web-readiness"
    }
  ]
}];