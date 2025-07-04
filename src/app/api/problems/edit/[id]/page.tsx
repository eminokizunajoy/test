export default function CreateProgrammingQuestionPage() {

  const router = useRouter();
  const [problemId, setProblemId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [isEditMode, setIsEditMode] = useState(false);
  
  useEffect(() => {
    console.log('=== DEBUG INFO ===');
    console.log('problemId:', problemId);
    console.log('isEditMode:', isEditMode);
    console.log('router.isReady:', router.isReady);
    console.log('router.query:', router.query);
    console.log('window.location:', window.location.href);
    console.log('==================');
  }, [problemId, isEditMode, router.isReady, router.query]);

}
