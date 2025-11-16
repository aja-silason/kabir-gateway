
import axios from 'axios';
import { ListAvailableDriversUsecase } from './list-available-drivers.usecase';
import { Driver } from 'src/domain/driver/model/driver.model';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('listAvailableDriversUsecase', () => {

  let usecase: ListAvailableDriversUsecase;

  beforeEach(() => {
    usecase = new ListAvailableDriversUsecase();

    // jest.spyOn(Math, 'random').mockReturnValue(0.3);
    // jest.spyOn(Math, 'floor').mockReturnValue(5);         

    jest.spyOn(Math, 'random').mockImplementationOnce(() => 0.492);
    jest.spyOn(Math, 'random').mockImplementationOnce(() => 0.285);


    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return the transformed list of available drivers', async () => {

    const fakeDrivers = [
      {
        driverName: "João Silva",
        vehicleType: {
          type: "Chengan",
          plate: "ABC-123"
        },
        location: {
          lat: -8.839,
          lng: 13.289
        }
      }
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: fakeDrivers });

    const result = await usecase.execute();

    const expected = [
      {
        driverName: "João Silva",
        vehicleType: {
          type: "Chengan",
          plate: "ABC-123"
        },
        location: {
          lat: -8.839,
          lng: 13.289
        },
        priceEstimate: "4.46",
        etaMinutes: 4
      },
    ];

    result.forEach(item => {
      expect(item).toBeInstanceOf(Driver);
    });

    const plainResult = result.map(d => ({
      driverName: d.allProps.driverName,
      vehicleType: d.allProps.vehicleType,
      location: d.allProps.location,
      priceEstimate: d.allProps.priceEstimate,
      etaMinutes: d.allProps.etaMinutes,
    }));

    expect(plainResult).toEqual(expected);
  });

});
