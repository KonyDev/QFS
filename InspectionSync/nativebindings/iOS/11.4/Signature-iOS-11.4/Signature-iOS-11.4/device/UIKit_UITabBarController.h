#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITabBarController_symbols(JSContext*);
@protocol UITabBarControllerInstanceExports<JSExport, UITabBarDelegateInstanceExports_, NSCodingInstanceExports_>
@property (copy,nonatomic) NSArray * viewControllers;
@property (assign,nonatomic) __kindof UIViewController * selectedViewController;
@property (nonatomic,weak) id delegate;
@property (readonly,nonatomic) UITabBar * tabBar;
@property (readonly,nonatomic) UINavigationController * moreNavigationController;
@property (nonatomic) NSUInteger selectedIndex;
@property (copy,nonatomic) NSArray * customizableViewControllers;
-(void) setViewControllers: (NSArray *) viewControllers animated: (BOOL) animated ;
@end
@protocol UITabBarControllerClassExports<JSExport, UITabBarDelegateClassExports_, NSCodingClassExports_>
@end
@protocol UIViewControllerUITabBarControllerItemCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UITabBarController * tabBarController;
@property (nonatomic,strong) UITabBarItem * tabBarItem;
@end
@protocol UIViewControllerUITabBarControllerItemCategoryClassExports<JSExport>
@end
@protocol UITabBarControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIInterfaceOrientation) tabBarControllerPreferredInterfaceOrientationForPresentation: (UITabBarController *) tabBarController ;
-(void) tabBarController: (UITabBarController *) tabBarController willBeginCustomizingViewControllers: (NSArray *) viewControllers ;
-(id) tabBarController: (UITabBarController *) tabBarController animationControllerForTransitionFromViewController: (UIViewController *) fromVC toViewController: (UIViewController *) toVC ;
-(BOOL) tabBarController: (UITabBarController *) tabBarController shouldSelectViewController: (UIViewController *) viewController ;
-(void) tabBarController: (UITabBarController *) tabBarController willEndCustomizingViewControllers: (NSArray *) viewControllers changed: (BOOL) changed ;
-(void) tabBarController: (UITabBarController *) tabBarController didEndCustomizingViewControllers: (NSArray *) viewControllers changed: (BOOL) changed ;
-(UIInterfaceOrientationMask) tabBarControllerSupportedInterfaceOrientations: (UITabBarController *) tabBarController ;
-(id) tabBarController: (UITabBarController *) tabBarController interactionControllerForAnimationController: (id) animationController ;
-(void) tabBarController: (UITabBarController *) tabBarController didSelectViewController: (UIViewController *) viewController ;
@end
@protocol UITabBarControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop