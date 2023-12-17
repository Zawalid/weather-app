import { useNavigate } from 'react-router';

export function useCustomNavigate() {
  const navigate = useNavigate();

  const customNavigate = (path, state = null) => {
    if (!path) return;
    navigate(path, { replace: true, state });
  };

  return customNavigate;
}
