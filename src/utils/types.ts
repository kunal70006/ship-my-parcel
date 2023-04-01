export interface IShipment {
  id: string;
  service: IService;
}

export interface IReqBody {
  shipment: {
    trackingId: string;
    service: IService;
    awbId: string;
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
