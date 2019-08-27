#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISplitViewController_symbols(JSContext*);
@protocol UISplitViewControllerInstanceExports<JSExport>
@property (nonatomic) UISplitViewControllerDisplayMode preferredDisplayMode;
@property (nonatomic) UISplitViewControllerPrimaryEdge primaryEdge;
@property (copy,nonatomic) NSArray * viewControllers;
@property (getter=isCollapsed,readonly,nonatomic) BOOL collapsed;
@property (readonly,nonatomic) UIBarButtonItem * displayModeButtonItem;
@property (readonly,nonatomic) UISplitViewControllerDisplayMode displayMode;
@property (assign,nonatomic) CGFloat preferredPrimaryColumnWidthFraction;
@property (readonly,nonatomic) CGFloat primaryColumnWidth;
@property (nonatomic,weak) id delegate;
@property (nonatomic) BOOL presentsWithGesture;
@property (assign,nonatomic) CGFloat maximumPrimaryColumnWidth;
@property (assign,nonatomic) CGFloat minimumPrimaryColumnWidth;
-(void) showDetailViewController: (UIViewController *) vc sender: (id) sender ;
-(void) showViewController: (UIViewController *) vc sender: (id) sender ;
@end
@protocol UISplitViewControllerClassExports<JSExport>
@end
@protocol UIViewControllerUISplitViewControllerCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) UISplitViewController * splitViewController;
-(UIViewController *) separateSecondaryViewControllerForSplitViewController: (UISplitViewController *) splitViewController ;
-(void) collapseSecondaryViewController: (UIViewController *) secondaryViewController forSplitViewController: (UISplitViewController *) splitViewController ;
@end
@protocol UIViewControllerUISplitViewControllerCategoryClassExports<JSExport>
@end
@protocol UISplitViewControllerDelegateInstanceExports_<JSExport>
-(void) splitViewController: (UISplitViewController *) svc willShowViewController: (UIViewController *) aViewController invalidatingBarButtonItem: (UIBarButtonItem *) barButtonItem ;
-(UIViewController *) primaryViewControllerForExpandingSplitViewController: (UISplitViewController *) splitViewController ;
-(void) splitViewController: (UISplitViewController *) svc willHideViewController: (UIViewController *) aViewController withBarButtonItem: (UIBarButtonItem *) barButtonItem forPopoverController: (UIPopoverController *) pc ;
-(UIInterfaceOrientationMask) splitViewControllerSupportedInterfaceOrientations: (UISplitViewController *) splitViewController ;
-(BOOL) splitViewController: (UISplitViewController *) svc shouldHideViewController: (UIViewController *) vc inOrientation: (UIInterfaceOrientation) orientation ;
-(BOOL) splitViewController: (UISplitViewController *) splitViewController collapseSecondaryViewController: (UIViewController *) secondaryViewController ontoPrimaryViewController: (UIViewController *) primaryViewController ;
-(void) splitViewController: (UISplitViewController *) svc willChangeToDisplayMode: (UISplitViewControllerDisplayMode) displayMode ;
-(UIViewController *) primaryViewControllerForCollapsingSplitViewController: (UISplitViewController *) splitViewController ;
-(UIInterfaceOrientation) splitViewControllerPreferredInterfaceOrientationForPresentation: (UISplitViewController *) splitViewController ;
-(void) splitViewController: (UISplitViewController *) svc popoverController: (UIPopoverController *) pc willPresentViewController: (UIViewController *) aViewController ;
-(UIViewController *) splitViewController: (UISplitViewController *) splitViewController separateSecondaryViewControllerFromPrimaryViewController: (UIViewController *) primaryViewController ;
-(UISplitViewControllerDisplayMode) targetDisplayModeForActionInSplitViewController: (UISplitViewController *) svc ;
-(BOOL) splitViewController: (UISplitViewController *) splitViewController showViewController: (UIViewController *) vc sender: (id) sender ;
-(BOOL) splitViewController: (UISplitViewController *) splitViewController showDetailViewController: (UIViewController *) vc sender: (id) sender ;
@end
@protocol UISplitViewControllerDelegateClassExports_<JSExport>
@end
#pragma clang diagnostic pop