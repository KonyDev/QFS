#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UINavigationController_symbols(JSContext*);
@protocol UINavigationControllerInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UIPanGestureRecognizer * barHideOnSwipeGestureRecognizer;
@property (copy,nonatomic) NSArray * viewControllers;
@property (readonly,nonatomic,strong) UIViewController * topViewController;
@property (assign,readwrite,nonatomic) BOOL hidesBarsOnSwipe;
@property (assign,readwrite,nonatomic) BOOL hidesBarsWhenKeyboardAppears;
@property (getter=isNavigationBarHidden,nonatomic) BOOL navigationBarHidden;
@property (readonly,assign,nonatomic) UITapGestureRecognizer * barHideOnTapGestureRecognizer;
@property (getter=isToolbarHidden,nonatomic) BOOL toolbarHidden;
@property (nonatomic,weak) id delegate;
@property (assign,readwrite,nonatomic) BOOL hidesBarsWhenVerticallyCompact;
@property (readonly,nonatomic,strong) UIViewController * visibleViewController;
@property (readonly,nonatomic) UIGestureRecognizer * interactivePopGestureRecognizer;
@property (readonly,nonatomic) UINavigationBar * navigationBar;
@property (readonly,nonatomic) UIToolbar * toolbar;
@property (assign,readwrite,nonatomic) BOOL hidesBarsOnTap;
JSExportAs(initWithNavigationBarClassToolbarClass,
-(id) jsinitWithNavigationBarClass: (JSValue *) navigationBarClass toolbarClass: (JSValue *) toolbarClass );
-(UIViewController *) popViewControllerAnimated: (BOOL) animated ;
-(void) setToolbarHidden: (BOOL) hidden animated: (BOOL) animated ;
-(void) pushViewController: (UIViewController *) viewController animated: (BOOL) animated ;
-(NSArray *) popToViewController: (UIViewController *) viewController animated: (BOOL) animated ;
JSExportAs(initWithRootViewController,
-(id) jsinitWithRootViewController: (UIViewController *) rootViewController );
-(void) setViewControllers: (NSArray *) viewControllers animated: (BOOL) animated ;
-(NSArray *) popToRootViewControllerAnimated: (BOOL) animated ;
-(void) showViewController: (UIViewController *) vc sender: (id) sender ;
-(void) setNavigationBarHidden: (BOOL) hidden animated: (BOOL) animated ;
@end
@protocol UINavigationControllerClassExports<JSExport>
@end
@protocol UIViewControllerUINavigationControllerItemCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UINavigationController * navigationController;
@property (nonatomic) BOOL hidesBottomBarWhenPushed;
@property (readonly,nonatomic,strong) UINavigationItem * navigationItem;
@end
@protocol UIViewControllerUINavigationControllerItemCategoryClassExports<JSExport>
@end
@protocol UIViewControllerUINavigationControllerContextualToolbarItemsCategoryInstanceExports<JSExport>
@property (nonatomic,strong) NSArray * toolbarItems;
-(void) setToolbarItems: (NSArray *) toolbarItems animated: (BOOL) animated ;
@end
@protocol UIViewControllerUINavigationControllerContextualToolbarItemsCategoryClassExports<JSExport>
@end
@protocol UINavigationControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIInterfaceOrientation) navigationControllerPreferredInterfaceOrientationForPresentation: (UINavigationController *) navigationController ;
-(id) navigationController: (UINavigationController *) navigationController interactionControllerForAnimationController: (id) animationController ;
-(void) navigationController: (UINavigationController *) navigationController didShowViewController: (UIViewController *) viewController animated: (BOOL) animated ;
-(UIInterfaceOrientationMask) navigationControllerSupportedInterfaceOrientations: (UINavigationController *) navigationController ;
-(id) navigationController: (UINavigationController *) navigationController animationControllerForOperation: (UINavigationControllerOperation) operation fromViewController: (UIViewController *) fromVC toViewController: (UIViewController *) toVC ;
-(void) navigationController: (UINavigationController *) navigationController willShowViewController: (UIViewController *) viewController animated: (BOOL) animated ;
@end
@protocol UINavigationControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop