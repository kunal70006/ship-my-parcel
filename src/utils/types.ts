export interface IShipment {
  id: string;
  service: IService;
  name: string;
  address: string;
}

export interface IReqBody {
  shipment: {
    trackingId: string;
    service: IService;
    awbId: string;
    name: string;
    address: string;
  };
}

export type IService = 'DHL' | 'Skynet' | 'Fedex';

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

export interface IMultiTrackingSkynet {
  trackingInfo: IShipmentDataSkynet[];
  userDetails: { name: string; address: string };
}

export interface IMultiTrackingDHL {
  trackingInfo: IShipmentDataDHL[];
  userDetails: { name: string; address: string };
}
