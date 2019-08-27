#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSLayoutConstraint_symbols(JSContext*);
@protocol NSLayoutConstraintInstanceExports<JSExport>
@property (readonly) NSLayoutAttribute firstAttribute;
@property (readonly,copy) NSLayoutAnchor * secondAnchor;
@property () BOOL shouldBeArchived;
@property (readonly,assign) id secondItem;
@property () UILayoutPriority priority;
@property (readonly) NSLayoutRelation relation;
@property (readonly,assign) id firstItem;
@property (readonly) CGFloat multiplier;
@property (getter=isActive) BOOL active;
@property () CGFloat constant;
@property (readonly) NSLayoutAttribute secondAttribute;
@property (readonly,copy) NSLayoutAnchor * firstAnchor;
@end
@protocol NSLayoutConstraintClassExports<JSExport>
+(void) activateConstraints: (NSArray *) constraints ;
+(id) constraintWithItem: (id) view1 attribute: (NSLayoutAttribute) attr1 relatedBy: (NSLayoutRelation) relation toItem: (id) view2 attribute: (NSLayoutAttribute) attr2 multiplier: (CGFloat) multiplier constant: (CGFloat) c ;
+(NSArray *) constraintsWithVisualFormat: (NSString *) format options: (NSLayoutFormatOptions) opts metrics: (NSDictionary *) metrics views: (NSDictionary *) views ;
+(void) deactivateConstraints: (NSArray *) constraints ;
@end
@protocol NSLayoutConstraintNSIdentifierCategoryInstanceExports<JSExport>
@property (copy) NSString * identifier;
@end
@protocol NSLayoutConstraintNSIdentifierCategoryClassExports<JSExport>
@end
@protocol UILayoutSupportInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,strong) NSLayoutDimension * heightAnchor;
@property (readonly,nonatomic) CGFloat length;
@property (readonly,strong) NSLayoutYAxisAnchor * bottomAnchor;
@property (readonly,strong) NSLayoutYAxisAnchor * topAnchor;
@end
@protocol UILayoutSupportClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop