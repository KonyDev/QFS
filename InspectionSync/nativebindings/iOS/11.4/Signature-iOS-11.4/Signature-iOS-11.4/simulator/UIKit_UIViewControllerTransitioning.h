#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIViewControllerTransitioning_symbols(JSContext*);
@protocol UIPercentDrivenInteractiveTransitionInstanceExports<JSExport, UIViewControllerInteractiveTransitioningInstanceExports_>
@property (nonatomic,strong) id timingCurve;
@property (nonatomic) BOOL wantsInteractiveStart;
@property (assign,nonatomic) UIViewAnimationCurve completionCurve;
@property (readonly) CGFloat percentComplete;
@property (readonly) CGFloat duration;
@property (assign,nonatomic) CGFloat completionSpeed;
-(void) pauseInteractiveTransition;
-(void) updateInteractiveTransition: (CGFloat) percentComplete ;
-(void) finishInteractiveTransition;
-(void) cancelInteractiveTransition;
@end
@protocol UIPercentDrivenInteractiveTransitionClassExports<JSExport, UIViewControllerInteractiveTransitioningClassExports_>
@end
@protocol UIViewControllerTransitioningDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(id) interactionControllerForPresentation: (id) animator ;
-(id) interactionControllerForDismissal: (id) animator ;
-(id) animationControllerForDismissedController: (UIViewController *) dismissed ;
-(UIPresentationController *) presentationControllerForPresentedViewController: (UIViewController *) presented presentingViewController: (UIViewController *) presenting sourceViewController: (UIViewController *) source ;
-(id) animationControllerForPresentedController: (UIViewController *) presented presentingController: (UIViewController *) presenting sourceController: (UIViewController *) source ;
@end
@protocol UIViewControllerTransitioningDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerInteractiveTransitioningInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIViewAnimationCurve completionCurve;
@property (readonly,nonatomic) CGFloat completionSpeed;
@property (readonly,nonatomic) BOOL wantsInteractiveStart;
-(void) startInteractiveTransition: (id) transitionContext ;
@end
@protocol UIViewControllerInteractiveTransitioningClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerContextTransitioningInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIView * containerView;
@property (readonly,nonatomic) UIModalPresentationStyle presentationStyle;
@property (getter=isAnimated,readonly,nonatomic) BOOL animated;
@property (readonly,nonatomic) CGAffineTransform targetTransform;
@property (readonly,nonatomic) BOOL transitionWasCancelled;
@property (getter=isInteractive,readonly,nonatomic) BOOL interactive;
-(__kindof UIViewController *) viewControllerForKey: (UITransitionContextViewControllerKey) key ;
-(void) completeTransition: (BOOL) didComplete ;
-(CGRect) finalFrameForViewController: (UIViewController *) vc ;
-(void) updateInteractiveTransition: (CGFloat) percentComplete ;
-(void) pauseInteractiveTransition;
-(void) finishInteractiveTransition;
-(__kindof UIView *) viewForKey: (UITransitionContextViewKey) key ;
-(void) cancelInteractiveTransition;
JSExportAs(initialFrameForViewController,
-(CGRect) jsinitialFrameForViewController: (UIViewController *) vc );
@end
@protocol UIViewControllerContextTransitioningClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerAnimatedTransitioningInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) animateTransition: (id) transitionContext ;
-(void) animationEnded: (BOOL) transitionCompleted ;
-(NSTimeInterval) transitionDuration: (id) transitionContext ;
-(id) interruptibleAnimatorForTransition: (id) transitionContext ;
@end
@protocol UIViewControllerAnimatedTransitioningClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop