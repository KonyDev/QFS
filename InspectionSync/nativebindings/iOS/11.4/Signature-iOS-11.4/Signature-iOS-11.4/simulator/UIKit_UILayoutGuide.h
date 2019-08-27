#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILayoutGuide_symbols(JSContext*);
@protocol UILayoutGuideInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * trailingAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * centerXAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * leadingAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * centerYAnchor;
@property (nonatomic,weak) UIView * owningView;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * leftAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * bottomAnchor;
@property (readonly,nonatomic) CGRect layoutFrame;
@property (readonly,nonatomic,strong) NSLayoutDimension * widthAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * rightAnchor;
@property (copy,nonatomic) NSString * identifier;
@property (readonly,nonatomic,strong) NSLayoutDimension * heightAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * topAnchor;
@end
@protocol UILayoutGuideClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop