#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIViewController_symbols(JSContext*);
@protocol UIViewControllerUIViewControllerPreviewingRegistrationCategoryInstanceExports<JSExport>
-(id) registerForPreviewingWithDelegate: (id) delegate sourceView: (UIView *) sourceView ;
-(void) unregisterForPreviewingWithContext: (id) previewing ;
@end
@protocol UIViewControllerUIViewControllerPreviewingRegistrationCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUILayoutSupportCategoryInstanceExports<JSExport>
@property (nonatomic) BOOL viewRespectsSystemMinimumLayoutMargins;
@property (nonatomic) UIEdgeInsets additionalSafeAreaInsets;
@property (readonly,nonatomic,strong) id topLayoutGuide;
@property (readonly,nonatomic,strong) id bottomLayoutGuide;
@property (readonly,nonatomic) NSDirectionalEdgeInsets systemMinimumLayoutMargins;
-(void) viewLayoutMarginsDidChange;
-(void) viewSafeAreaInsetsDidChange;
@end
@protocol UIViewControllerUILayoutSupportCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIViewControllerRotationCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) UIInterfaceOrientation interfaceOrientation;
@property (readonly,nonatomic) UIInterfaceOrientation preferredInterfaceOrientationForPresentation;
@property (readonly,nonatomic) UIInterfaceOrientationMask supportedInterfaceOrientations;
@property (readonly,nonatomic) BOOL shouldAutorotate;
-(BOOL) shouldAutorotateToInterfaceOrientation: (UIInterfaceOrientation) toInterfaceOrientation ;
-(void) didAnimateFirstHalfOfRotationToInterfaceOrientation: (UIInterfaceOrientation) toInterfaceOrientation ;
-(void) willRotateToInterfaceOrientation: (UIInterfaceOrientation) toInterfaceOrientation duration: (NSTimeInterval) duration ;
-(void) willAnimateFirstHalfOfRotationToInterfaceOrientation: (UIInterfaceOrientation) toInterfaceOrientation duration: (NSTimeInterval) duration ;
-(UIView *) rotatingHeaderView;
-(void) willAnimateSecondHalfOfRotationFromInterfaceOrientation: (UIInterfaceOrientation) fromInterfaceOrientation duration: (NSTimeInterval) duration ;
-(UIView *) rotatingFooterView;
-(void) didRotateFromInterfaceOrientation: (UIInterfaceOrientation) fromInterfaceOrientation ;
-(void) willAnimateRotationToInterfaceOrientation: (UIInterfaceOrientation) toInterfaceOrientation duration: (NSTimeInterval) duration ;
@end
@protocol UIViewControllerUIViewControllerRotationCategoryClassExports<JSExport>
+(void) attemptRotationToDeviceOrientation;
@end
@protocol UIViewControllerUIHomeIndicatorAutoHiddenCategoryInstanceExports<JSExport>
-(void) setNeedsUpdateOfHomeIndicatorAutoHidden;
-(BOOL) prefersHomeIndicatorAutoHidden;
-(UIViewController *) childViewControllerForHomeIndicatorAutoHidden;
@end
@protocol UIViewControllerUIHomeIndicatorAutoHiddenCategoryClassExports<JSExport>
@end
@protocol UIViewControllerAnonCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * previewActionItems;
@end
@protocol UIViewControllerAnonCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIScreenEdgesDeferringSystemGesturesCategoryInstanceExports<JSExport>
-(void) setNeedsUpdateOfScreenEdgesDeferringSystemGestures;
-(UIRectEdge) preferredScreenEdgesDeferringSystemGestures;
-(UIViewController *) childViewControllerForScreenEdgesDeferringSystemGestures;
@end
@protocol UIViewControllerUIScreenEdgesDeferringSystemGesturesCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUISearchDisplayControllerSupportCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UISearchDisplayController * searchDisplayController;
@end
@protocol UIViewControllerUISearchDisplayControllerSupportCategoryClassExports<JSExport>
@end
@protocol UIPreviewActionInstanceExports<JSExport, NSCopyingInstanceExports_, UIPreviewActionItemInstanceExports_>
@property (readonly,getter=getJsHandler) JSValue* jshandler;
@end
@protocol UIPreviewActionClassExports<JSExport, NSCopyingClassExports_, UIPreviewActionItemClassExports_>
JSExportAs(actionWithTitleStyleHandler,
+(id) jsactionWithTitle: (NSString *) title style: (UIPreviewActionStyle) style handler: (JSValue *) handler );
@end
@protocol UIViewControllerNSExtensionAdditionsCategoryInstanceExports<JSExport, NSExtensionRequestHandlingInstanceExports_>
@property (readonly,nonatomic,strong) NSExtensionContext * extensionContext;
@end
@protocol UIViewControllerNSExtensionAdditionsCategoryClassExports<JSExport, NSExtensionRequestHandlingClassExports_>
@end
@protocol UIViewControllerUIAdaptivePresentationsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) UIPopoverPresentationController * popoverPresentationController;
@property (readonly,nonatomic) UIPresentationController * presentationController;
@end
@protocol UIViewControllerUIAdaptivePresentationsCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIContainerViewControllerProtectedMethodsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * childViewControllers;
@property (readonly,nonatomic) UIViewController * childViewControllerForStatusBarHidden;
@property (readonly,nonatomic) UIViewController * childViewControllerForStatusBarStyle;
-(void) removeFromParentViewController;
-(void) addChildViewController: (UIViewController *) childController ;
-(void) setOverrideTraitCollection: (UITraitCollection *) collection forChildViewController: (UIViewController *) childViewController ;
JSExportAs(transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion,
-(void) jstransitionFromViewController: (UIViewController *) fromViewController toViewController: (UIViewController *) toViewController duration: (NSTimeInterval) duration options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
-(void) endAppearanceTransition;
-(void) beginAppearanceTransition: (BOOL) isAppearing animated: (BOOL) animated ;
-(UITraitCollection *) overrideTraitCollectionForChildViewController: (UIViewController *) childViewController ;
@end
@protocol UIViewControllerUIContainerViewControllerProtectedMethodsCategoryClassExports<JSExport>
@end
@protocol UIPreviewActionGroupInstanceExports<JSExport, NSCopyingInstanceExports_, UIPreviewActionItemInstanceExports_>
@end
@protocol UIPreviewActionGroupClassExports<JSExport, NSCopyingClassExports_, UIPreviewActionItemClassExports_>
+(id) actionGroupWithTitle: (NSString *) title style: (UIPreviewActionStyle) style actions: (NSArray *) actions ;
@end
@protocol UIViewControllerUIViewControllerTransitioningCategoryInstanceExports<JSExport>
@property (nonatomic,weak) id transitioningDelegate;
@end
@protocol UIViewControllerUIViewControllerTransitioningCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIKeyCommandCategoryInstanceExports<JSExport>
-(void) removeKeyCommand: (UIKeyCommand *) keyCommand ;
-(void) addKeyCommand: (UIKeyCommand *) keyCommand ;
@end
@protocol UIViewControllerUIKeyCommandCategoryClassExports<JSExport>
@end
@protocol UIViewControllerInstanceExports<JSExport, NSCodingInstanceExports_, UIAppearanceContainerInstanceExports_, UITraitEnvironmentInstanceExports_, UIContentContainerInstanceExports_, UIFocusEnvironmentInstanceExports_>
@property (readonly,nonatomic) UIViewController * presentingViewController;
@property (getter=isBeingPresented,readonly,nonatomic) BOOL beingPresented;
@property (getter=isViewLoaded,readonly,nonatomic) BOOL viewLoaded;
@property (readonly,nonatomic,strong) UIView * viewIfLoaded;
@property (assign,nonatomic) UIRectEdge edgesForExtendedLayout;
@property (readonly,nonatomic) BOOL disablesAutomaticKeyboardDismissal;
@property (getter=isMovingToParentViewController,readonly,nonatomic) BOOL movingToParentViewController;
@property (readonly,nonatomic) UIViewController * modalViewController;
@property (copy,nonatomic) NSString * title;
@property (assign,nonatomic) BOOL providesPresentationContextTransitionStyle;
@property (readonly,nonatomic) UIViewController * presentedViewController;
@property (assign,nonatomic) BOOL wantsFullScreenLayout;
@property (assign,nonatomic) UIModalPresentationStyle modalPresentationStyle;
@property (assign,nonatomic) BOOL modalPresentationCapturesStatusBarAppearance;
@property (readonly,nonatomic) UIStatusBarAnimation preferredStatusBarUpdateAnimation;
@property (assign,nonatomic) BOOL definesPresentationContext;
@property (readonly,nonatomic) BOOL prefersStatusBarHidden;
@property (nonatomic) BOOL restoresFocusAfterTransition;
@property (readonly,copy,nonatomic) NSString * nibName;
@property (assign,nonatomic) BOOL automaticallyAdjustsScrollViewInsets;
@property (readonly,nonatomic,strong) UIStoryboard * storyboard;
@property (assign,nonatomic) BOOL extendedLayoutIncludesOpaqueBars;
@property (getter=isBeingDismissed,readonly,nonatomic) BOOL beingDismissed;
@property (getter=isMovingFromParentViewController,readonly,nonatomic) BOOL movingFromParentViewController;
@property (nonatomic) CGSize preferredContentSize;
@property (readonly,nonatomic) UIStatusBarStyle preferredStatusBarStyle;
@property (readonly,nonatomic,weak) UIViewController * parentViewController;
@property (assign,nonatomic) UIModalTransitionStyle modalTransitionStyle;
@property (readonly,nonatomic,strong) NSBundle * nibBundle;
@property (nonatomic,strong) UIView * view;
-(void) performSegueWithIdentifier: (NSString *) identifier sender: (id) sender ;
JSExportAs(initWithNibNameBundle,
-(id) jsinitWithNibName: (NSString *) nibNameOrNil bundle: (NSBundle *) nibBundleOrNil );
-(void) didReceiveMemoryWarning;
-(void) prepareForSegue: (UIStoryboardSegue *) segue sender: (id) sender ;
-(void) viewDidAppear: (BOOL) animated ;
-(void) showDetailViewController: (UIViewController *) vc sender: (id) sender ;
-(BOOL) shouldPerformSegueWithIdentifier: (NSString *) identifier sender: (id) sender ;
-(void) dismissModalViewControllerAnimated: (BOOL) animated ;
JSExportAs(canPerformUnwindSegueActionFromViewControllerWithSender,
-(BOOL) jscanPerformUnwindSegueAction: (NSString *) action fromViewController: (UIViewController *) fromViewController withSender: (id) sender );
-(void) viewDidLoad;
-(void) viewWillDisappear: (BOOL) animated ;
-(void) viewWillLayoutSubviews;
-(void) loadViewIfNeeded;
-(UIStoryboardSegue *) segueForUnwindingToViewController: (UIViewController *) toViewController fromViewController: (UIViewController *) fromViewController identifier: (NSString *) identifier ;
-(UIViewController *) childViewControllerContainingSegueSource: (UIStoryboardUnwindSegueSource *) source ;
-(void) viewDidLayoutSubviews;
-(void) presentModalViewController: (UIViewController *) modalViewController animated: (BOOL) animated ;
JSExportAs(viewControllerForUnwindSegueActionFromViewControllerWithSender,
-(UIViewController *) jsviewControllerForUnwindSegueAction: (NSString *) action fromViewController: (UIViewController *) fromViewController withSender: (id) sender );
-(NSArray *) allowedChildViewControllersForUnwindingFromSource: (UIStoryboardUnwindSegueSource *) source ;
-(void) viewWillUnload;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(dismissViewControllerAnimatedCompletion,
-(void) jsdismissViewControllerAnimated: (BOOL) flag completion: (JSValue *) completion );
-(void) loadView;
-(void) unwindForSegue: (UIStoryboardSegue *) unwindSegue towardsViewController: (UIViewController *) subsequentVC ;
JSExportAs(targetViewControllerForActionSender,
-(UIViewController *) jstargetViewControllerForAction: (NSString *) action sender: (id) sender );
-(void) viewDidDisappear: (BOOL) animated ;
-(void) viewWillAppear: (BOOL) animated ;
-(void) showViewController: (UIViewController *) vc sender: (id) sender ;
-(void) viewDidUnload;
JSExportAs(presentViewControllerAnimatedCompletion,
-(void) jspresentViewController: (UIViewController *) viewControllerToPresent animated: (BOOL) flag completion: (JSValue *) completion );
-(void) setNeedsStatusBarAppearanceUpdate;
@end
@protocol UIViewControllerClassExports<JSExport, NSCodingClassExports_, UIAppearanceContainerClassExports_, UITraitEnvironmentClassExports_, UIContentContainerClassExports_, UIFocusEnvironmentClassExports_>
@end
@protocol UIViewControllerUIViewControllerEditingCategoryInstanceExports<JSExport>
@property (getter=isEditing,nonatomic) BOOL editing;
@property (readonly,nonatomic) UIBarButtonItem * editButtonItem;
-(void) setEditing: (BOOL) editing animated: (BOOL) animated ;
@end
@protocol UIViewControllerUIViewControllerEditingCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIConstraintBasedLayoutCoreMethodsCategoryInstanceExports<JSExport>
-(void) updateViewConstraints;
@end
@protocol UIViewControllerUIConstraintBasedLayoutCoreMethodsCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIContainerViewControllerCallbacksCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL shouldAutomaticallyForwardAppearanceMethods;
-(BOOL) automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers;
-(BOOL) shouldAutomaticallyForwardRotationMethods;
-(void) willMoveToParentViewController: (UIViewController *) parent ;
-(void) didMoveToParentViewController: (UIViewController *) parent ;
@end
@protocol UIViewControllerUIContainerViewControllerCallbacksCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUIStateRestorationCategoryInstanceExports<JSExport, UIStateRestoringInstanceExports_>
@property (getter=getJsRestorationClass,setter=setJsRestorationClass:) JSValue* jsrestorationClass;
@property (copy,nonatomic) NSString * restorationIdentifier;
-(void) encodeRestorableStateWithCoder: (NSCoder *) coder ;
-(void) applicationFinishedRestoringState;
-(void) decodeRestorableStateWithCoder: (NSCoder *) coder ;
@end
@protocol UIViewControllerUIStateRestorationCategoryClassExports<JSExport, UIStateRestoringClassExports_>
@end
@protocol UIPreviewActionItemInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,copy,nonatomic) NSString * title;
@end
@protocol UIPreviewActionItemClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIContentContainerInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) CGSize preferredContentSize;
-(CGSize) sizeForChildContentContainer: (id) container withParentContainerSize: (CGSize) parentSize ;
-(void) systemLayoutFittingSizeDidChangeForChildContentContainer: (id) container ;
-(void) preferredContentSizeDidChangeForChildContentContainer: (id) container ;
-(void) willTransitionToTraitCollection: (UITraitCollection *) newCollection withTransitionCoordinator: (id) coordinator ;
-(void) viewWillTransitionToSize: (CGSize) size withTransitionCoordinator: (id) coordinator ;
@end
@protocol UIContentContainerClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerPreviewingInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIView * sourceView;
@property (nonatomic) CGRect sourceRect;
@property (readonly,nonatomic) UIGestureRecognizer * previewingGestureRecognizerForFailureRelationship;
@property (readonly,nonatomic) id delegate;
@end
@protocol UIViewControllerPreviewingClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerPreviewingDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIViewController *) previewingContext: (id) previewingContext viewControllerForLocation: (CGPoint) location ;
-(void) previewingContext: (id) previewingContext commitViewController: (UIViewController *) viewControllerToCommit ;
@end
@protocol UIViewControllerPreviewingDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop