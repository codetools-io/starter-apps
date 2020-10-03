export default function Flag({ children, name, ...props }) {
  const key = `REACT_APP_FLAG_${name}`;
  const isActivated = process?.env?.[key]?.toLowerCase?.() === 'true';

  if (isActivated) {
    return children;
  }

  return null;
}
