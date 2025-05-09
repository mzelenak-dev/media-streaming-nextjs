type ActionButtonProps = {
  buttonText: string;
  clickHandler?: () => void;
}

const ActionButton = ({buttonText, clickHandler}: ActionButtonProps) => {
  return (
    <div
      onClick={clickHandler}
      className='trial-button bg-cta-red text-white py-[18px] px-[24px] rounded-[8px]'>
      {buttonText}
    </div>
  )
}

export default ActionButton