#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIViewControllerTransitionCoordinator_symbols(JSContext*);
@protocol UIViewControllerUIViewControllerTransitionCoordinatorCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) id transitionCoordinator;
@end
@protocol UIViewControllerUIViewControllerTransitionCoordinatorCategoryClassExports<JSExport>
@end
@protocol UIViewControllerTransitionCoordinatorContextInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) BOOL initiallyInteractive;
@property (readonly,nonatomic) UIModalPresentationStyle presentationStyle;
@property (readonly,nonatomic) CGAffineTransform targetTransform;
@property (readonly,nonatomic) UIView * containerView;
@property (readonly,nonatomic) NSTimeInterval transitionDuration;
@property (readonly,nonatomic) CGFloat percentComplete;
@property (getter=isCancelled,readonly,nonatomic) BOOL cancelled;
@property (readonly,nonatomic) UIViewAnimationCurve completionCurve;
@property (readonly,nonatomic) BOOL isInterruptible;
@property (getter=isAnimated,readonly,nonatomic) BOOL animated;
@property (readonly,nonatomic) CGFloat completionVelocity;
@property (getter=isInteractive,readonly,nonatomic) BOOL interactive;
-(__kindof UIViewController *) viewControllerForKey: (UITransitionContextViewControllerKey) key ;
-(__kindof UIView *) viewForKey: (UITransitionContextViewKey) key ;
@end
@protocol UIViewControllerTransitionCoordinatorContextClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewControllerTransitionCoordinatorInstanceExports_<JSExport, UIViewControllerTransitionCoordinatorContextInstanceExports_>
JSExportAs(animateAlongsideTransitionCompletion,
-(BOOL) jsanimateAlongsideTransition: (JSValue *) animation completion: (JSValue *) completion );
JSExportAs(notifyWhenInteractionEndsUsingBlock,
-(void) jsnotifyWhenInteractionEndsUsingBlock: (JSValue *) handler );
JSExportAs(notifyWhenInteractionChangesUsingBlock,
-(void) jsnotifyWhenInteractionChangesUsingBlock: (JSValue *) handler );
JSExportAs(animateAlongsideTransitionInViewAnimationCompletion,
-(BOOL) jsanimateAlongsideTransitionInView: (UIView *) view animation: (JSValue *) animation completion: (JSValue *) completion );
@end
@protocol UIViewControllerTransitionCoordinatorClassExports_<JSExport, UIViewControllerTransitionCoordinatorContextClassExports_>
@end
#pragma clang diagnostic pop