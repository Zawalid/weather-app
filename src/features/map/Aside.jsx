import { useMyCities } from '../../hooks/useMyCities';
import ErrorMessage from '../../ui/ErrorMessage';
import Cities from '../mycities/Cities';

export function Aside() {
  const { myCities } = useMyCities();
  return !myCities.length ? (
    <ErrorMessage type='noCitiesMap' />
  ) : (
    <Cities cities={myCities} source='map' type={3} />
  );
}
