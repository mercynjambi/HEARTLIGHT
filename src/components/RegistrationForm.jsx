import { useState } from 'react';
import MemberInfoStep from './steps/MemberInfoStep';
import DependentsStep from './steps/DependentsStep';
import NextOfKinStep from './steps/NextOfKinStep';
import DeclarationStep from './steps/DeclarationStep';
import ProgressIndicator from './ProgressIndicator';
import Navbar from './Navbar';

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [memberInfo, setMemberInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    nationalId: '',
    village: '',
    country: '',
    gender: '',
    category: '',
    maritalStatus: '',
    dateOfBirth: '',
    mobileNumber: '',
    otherMobileNumber: '',
  });

  const [dependents, setDependents] = useState([]);

  const [nextOfKin, setNextOfKin] = useState([
    { firstName: '', middleName: '', lastName: '', nationalId: '', phoneNumber: '', relationship: '' },
    { firstName: '', middleName: '', lastName: '', nationalId: '', phoneNumber: '', relationship: '' },
  ]);

  const [declaration, setDeclaration] = useState({
    mpesaCode: '',
    referredBy: '',
    agreed: false,
  });

  const steps = [
    { number: 1, label: 'Member Info' },
    { number: 2, label: 'Dependents' },
    { number: 3, label: 'Next of Kin' },
    { number: 4, label: 'Declaration' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting registration:', {
      memberInfo,
      dependents,
      nextOfKin,
      declaration,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <Navbar />
      <div className="max-w-5xl mt-12 mx-auto px-4">
        <ProgressIndicator steps={steps} currentStep={currentStep} />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          {currentStep === 1 && (
            <MemberInfoStep
              data={memberInfo}
              onChange={setMemberInfo}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <DependentsStep
              data={dependents}
              onChange={setDependents}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 3 && (
            <NextOfKinStep
              data={nextOfKin}
              onChange={setNextOfKin}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 4 && (
            <DeclarationStep
              data={declaration}
              onChange={setDeclaration}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
