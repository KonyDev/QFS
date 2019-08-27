#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStateRestoration_symbols(JSContext*);
@protocol UIObjectRestorationInstanceExports_<JSExport>
@end
@protocol UIObjectRestorationClassExports_<JSExport>
+(id) objectWithRestorationIdentifierPath: (NSArray *) identifierComponents coder: (NSCoder *) coder ;
@end
@protocol UIViewControllerRestorationInstanceExports_<JSExport>
@end
@protocol UIViewControllerRestorationClassExports_<JSExport>
+(UIViewController *) viewControllerWithRestorationIdentifierPath: (NSArray *) identifierComponents coder: (NSCoder *) coder ;
@end
@protocol UIStateRestoringInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) id restorationParent;
@property (readonly,getter=getJsObjectRestorationClass) JSValue* jsobjectRestorationClass;
-(void) encodeRestorableStateWithCoder: (NSCoder *) coder ;
-(void) applicationFinishedRestoringState;
-(void) decodeRestorableStateWithCoder: (NSCoder *) coder ;
@end
@protocol UIStateRestoringClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIDataSourceModelAssociationInstanceExports_<JSExport>
-(NSString *) modelIdentifierForElementAtIndexPath: (NSIndexPath *) idx inView: (UIView *) view ;
-(NSIndexPath *) indexPathForElementWithModelIdentifier: (NSString *) identifier inView: (UIView *) view ;
@end
@protocol UIDataSourceModelAssociationClassExports_<JSExport>
@end
#pragma clang diagnostic pop