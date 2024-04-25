export interface IShipment {
  id: string;
  service: IService;
  name: string;
  address: string;
  actualWeight: string;
  volWeight: string;
}

export interface IBaseShipment {
  trackingId: string;
  service: IService;
  awbId: string;
  name: string;
  address: string;
  actualWeight: string;
  volWeight: string;
  isPaid: boolean;
}

export interface AllShipment extends IReqBody {
  docId: string;
}

export interface IReqBody {
  shipment: IBaseShipment;
}

export type IService = 'DHL' | 'Skynet' | 'Fedex' | 'SkynetNew';

export interface IShipmentDataSkynet {
  Status: string;
  ShipDate: string;
  Remarks: string;
}

export interface IShipmentDataDHL {
  description: string;
  location: {
    address: {
      addressLocality: string;
    };
  };
  timestamp: string;
}

export interface IShipmentDataFedex {
  date: string;
  derivedStatus: string;
  exceptionDescription: string;
  scanLocation: {
    city: string;
  };
}

export interface IMultiTrackingSkynet {
  trackingInfo: IShipmentDataSkynet[];
  userDetails: {
    name: string;
    address: string;
    actualWeight: string;
    volWeight: string;
  };
}

export interface IMultiTrackingDHL {
  trackingInfo: IShipmentDataDHL[];
  userDetails: {
    name: string;
    address: string;
    actualWeight: string;
    volWeight: string;
  };
}

export interface IMultiTrackingFedex {
  trackingInfo: IShipmentDataFedex[];
  userDetails: {
    name: string;
    address: string;
    actualWeight: string;
    volWeight: string;
  };
}
